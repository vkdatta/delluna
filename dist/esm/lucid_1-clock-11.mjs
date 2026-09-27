export const name="lucid_1-clock-11";
export const id="dl_04e58e497cf043038d42";
export const url=new URL("../icons/lucid_1-clock-11.svg?v=36d5a3013587ac5fe89b574f24c321c38afae16f20b23e00c883d0b792c60da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
