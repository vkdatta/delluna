export const name="hourglass-medium-thin";
export const id="dl_820d5ade8a674ee1b96a";
export const url=new URL("../icons/hourglass-medium-thin.svg?v=457b5d724222c7ac7fab634641713fde6a17e9551144dde1622dba8a0a96d965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
