export const name="lucid_1-book-x";
export const id="dl_b613d65e42f34e0294e0";
export const url=new URL("../icons/lucid_1-book-x.svg?v=4a741caec1c6c5bbca083592c8d929d54ab17baeec8e99ee3ba41be6f4d702a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
