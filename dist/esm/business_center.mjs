export const name="business_center";
export const id="dl_39c96875f0b72147f60b";
export const url=new URL("../icons/business_center.svg?v=0fab7ac5b2436935dc864df2cb4bc1abca5c415f1ac265b079708cc63359f042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
