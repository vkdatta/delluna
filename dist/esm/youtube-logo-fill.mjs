export const name="youtube-logo-fill";
export const id="dl_6a9ec2f87af7a786da47";
export const url=new URL("../icons/youtube-logo-fill.svg?v=4907c132937909fbc153f331ae1c403a091ad289ac441de8e2e47c546f688bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
