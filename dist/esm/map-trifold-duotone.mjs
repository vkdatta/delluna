export const name="map-trifold-duotone";
export const id="dl_1c79f290001544d2ba5a";
export const url=new URL("../icons/map-trifold-duotone.svg?v=423a17958485015c72c043ef6f4eab04cefa02f275b670959de077ba9162ce37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
