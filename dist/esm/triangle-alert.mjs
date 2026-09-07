export const name="triangle-alert";
export const id="dl_2bf1b2da7bcc4f03bf0b";
export const url=new URL("../icons/triangle-alert.svg?v=c0fdc7cae07b292f02281280f0b671f618bdecce12710bdd1ad9bbb46394976f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
