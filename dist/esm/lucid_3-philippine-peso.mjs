export const name="lucid_3-philippine-peso";
export const id="dl_0cc10c8dd53d45bcbe72";
export const url=new URL("../icons/lucid_3-philippine-peso.svg?v=d1ccd66928653b90c1d17b3bbaa935f6903d5e5a552751c3a4b740e0baf95001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
