export const name="meteor-fill";
export const id="dl_3a78509b9ae349ef89de";
export const url=new URL("../icons/meteor-fill.svg?v=5c46bd6b337f687aa2d71790fa44cf1f93cb5b7e95380ad855eb1e353ee63e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
