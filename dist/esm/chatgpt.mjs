export const name="chatgpt";
export const id="dl_070a3aa1c65c3af75a9f";
export const url=new URL("../icons/chatgpt.svg?v=7aa1c31e9f153d45268b7edd3acacde20ab542953a3b32966b47209a10893b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
