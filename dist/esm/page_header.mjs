export const name="page_header";
export const id="dl_ae5049a035e80ca95f08";
export const url=new URL("../icons/page_header.svg?v=25efe216439af85c4b0b9fd1b98c520150e0a1cbac11106b4ea94e72c3e8e227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
