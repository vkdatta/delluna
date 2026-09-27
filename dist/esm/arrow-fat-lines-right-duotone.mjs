export const name="arrow-fat-lines-right-duotone";
export const id="dl_6fd2cb33e7fa42dca809";
export const url=new URL("../icons/arrow-fat-lines-right-duotone.svg?v=2366d890675502fd1fa8c3f74c9d542639e4e88088be418d73c0cbb086c1dfda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
