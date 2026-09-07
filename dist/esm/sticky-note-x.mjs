export const name="sticky-note-x";
export const id="dl_7d2d004963a049dbb7e4";
export const url=new URL("../icons/sticky-note-x.svg?v=b818ccc680e2704b5c78527deacd758956ce1fb10c9f1ab1ba71ceda617d8b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
