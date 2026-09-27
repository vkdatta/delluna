export const name="lucid_1-book-a";
export const id="dl_b8afb50b43534e00af47";
export const url=new URL("../icons/lucid_1-book-a.svg?v=6bd243794cb22fd08bf2cd62ece33434861699e75c9389c49cf6af5a66a54a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
