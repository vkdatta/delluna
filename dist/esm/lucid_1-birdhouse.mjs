export const name="lucid_1-birdhouse";
export const id="dl_b7b5dab27f1345a5a0ee";
export const url=new URL("../icons/lucid_1-birdhouse.svg?v=ba5159a039993c054e5f20d03e63562a5efc3087e089514f7707540150c9d43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
