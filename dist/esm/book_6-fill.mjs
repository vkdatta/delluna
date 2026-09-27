export const name="book_6-fill";
export const id="dl_2088821703996577f461";
export const url=new URL("../icons/book_6-fill.svg?v=a13c4ad1f6e330180288e8c63b4ec4a7c0bb928f6d6235f9702fb86df3fe2ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
