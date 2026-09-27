export const name="lucid_2-folder-search";
export const id="dl_5899bc56c2c74f999628";
export const url=new URL("../icons/lucid_2-folder-search.svg?v=c35b80b080aaeeb6d0474e4ba115af49ec9f9fb39646069fbf63f1c62563fc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
