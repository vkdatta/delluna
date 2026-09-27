export const name="dots-three-outline-vertical";
export const id="dl_3afeee16072d4ded9f4e";
export const url=new URL("../icons/dots-three-outline-vertical.svg?v=f2132c9d7f7f829c8f6283631db8ee5438ce57e3645b6fc406a407f041920313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
