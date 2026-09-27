export const name="dropbox-logo-fill";
export const id="dl_9e1383ea6e1c4ee5afe3";
export const url=new URL("../icons/dropbox-logo-fill.svg?v=cf86f6db9482c38bec4a620a53fec427018173e53c2dcc38a972e98ad4e058ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
