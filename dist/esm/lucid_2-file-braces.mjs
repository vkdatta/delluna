export const name="lucid_2-file-braces";
export const id="dl_7b66b26a1da6419fb627";
export const url=new URL("../icons/lucid_2-file-braces.svg?v=aa10e5c267bd0ac432f7e492e46f617b80b63f6be254d3f01b833d730938cf1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
