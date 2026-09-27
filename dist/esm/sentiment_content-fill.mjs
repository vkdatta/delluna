export const name="sentiment_content-fill";
export const id="dl_2925c94e6c5bc8ef918d";
export const url=new URL("../icons/sentiment_content-fill.svg?v=e06a9e3f4b3a8d9443d492f96e8080d77dc4654781c6b8f2b9660ed7f9842d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
