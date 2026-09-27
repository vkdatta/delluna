export const name="share_location";
export const id="dl_fdc2722ed7b35af86b42";
export const url=new URL("../icons/share_location.svg?v=ae974b73c80980d43dc4ffe5b291ee84fe8cf2c1832d42d628a871eb05f397a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
