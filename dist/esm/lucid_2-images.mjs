export const name="lucid_2-images";
export const id="dl_3fc237b8dcc0486999e0";
export const url=new URL("../icons/lucid_2-images.svg?v=31e0edc7d77145a9a3dd17d8443c8ff41266ec4b1f4f070fa1923740ad2c0019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
