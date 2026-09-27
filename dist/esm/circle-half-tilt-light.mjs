export const name="circle-half-tilt-light";
export const id="dl_eac70bbb5e12493ea45a";
export const url=new URL("../icons/circle-half-tilt-light.svg?v=3159c34d3c9d06827b5dcd46562c5b892075be08e27337f0811e4073b1ae3fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
