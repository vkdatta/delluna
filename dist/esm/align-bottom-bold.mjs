export const name="align-bottom-bold";
export const id="dl_68a54ae0f288424096e4";
export const url=new URL("../icons/align-bottom-bold.svg?v=f34afde497b3cd2223e388b74f51e520f9b17e9fbf97e19c58bc86a50a6b2423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
