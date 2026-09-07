export const name="sliders-thin";
export const id="dl_ed375513728f47f4800f";
export const url=new URL("../icons/S/sliders-thin.svg?v=dd93b36c52e8731e86046d1d90cb49435e6496ff931ba9714a207af8fadf5883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
