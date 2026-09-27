export const name="circle_circle";
export const id="dl_853b74ced02652bff361";
export const url=new URL("../icons/circle_circle.svg?v=32745e265980653303130064dc56d612e5b572e6f33f068b379c67096da71edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
