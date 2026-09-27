export const name="arrow-u-down-left-light";
export const id="dl_f1bcabbbd72d47e595d5";
export const url=new URL("../icons/arrow-u-down-left-light.svg?v=6d762e22e26974c94deee3d7e844d2c14c96c24bc11d91fc79bd42548324a565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
