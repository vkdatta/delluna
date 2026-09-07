export const name="framer-logo-light";
export const id="dl_b1931312d86641ac943a";
export const url=new URL("../icons/framer-logo-light.svg?v=edc6ec8b7ad6cb6f098419cfd81205f15d162a027f48a0964dfadf329e0b5e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
