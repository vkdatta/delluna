export const name="dots-three-bold";
export const id="dl_f122250fad4d46628159";
export const url=new URL("../icons/dots-three-bold.svg?v=a2a38615051612a988a9b1634248660a87bf784ed8da4617fc1bf87dcf3cb40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
