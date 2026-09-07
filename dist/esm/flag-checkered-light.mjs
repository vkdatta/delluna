export const name="flag-checkered-light";
export const id="dl_bd502b5d3369470c98f8";
export const url=new URL("../icons/flag-checkered-light.svg?v=db4d4cc5c4ce40bf32ff76f3373fe53e6814ed2d1adccf580e46d36454ec6761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
