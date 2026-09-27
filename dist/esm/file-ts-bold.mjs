export const name="file-ts-bold";
export const id="dl_0dac66fcc84441cfb3cf";
export const url=new URL("../icons/file-ts-bold.svg?v=276a021a74a70d07a3ee28aae7ecdb18fee49d48bff017edc3c9525b0d9c42a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
