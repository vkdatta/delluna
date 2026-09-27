export const name="cards-light";
export const id="dl_0189d7aea1184414ae85";
export const url=new URL("../icons/cards-light.svg?v=87459281acc3e09c211b219fe3ae23c0a870311fff934414b6da60c46fcb6c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
