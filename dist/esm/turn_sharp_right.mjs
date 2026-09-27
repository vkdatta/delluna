export const name="turn_sharp_right";
export const id="dl_0523b95c26e1a39c1572";
export const url=new URL("../icons/turn_sharp_right.svg?v=5b46d250493454ff8f17af4ed4e37b82c5dd58b001c83fa4e7f406d27a5b4a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
