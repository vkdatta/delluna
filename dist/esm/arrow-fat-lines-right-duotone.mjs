export const name="arrow-fat-lines-right-duotone";
export const id="dl_6fd2cb33e7fa42dca809";
export const url=new URL("../icons/arrow-fat-lines-right-duotone.svg?v=78fcbe742b9bfd4928df233b2a76cb460fd09413649c823dd95c7265b5fb102b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
