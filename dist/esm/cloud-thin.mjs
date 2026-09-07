export const name="cloud-thin";
export const id="dl_b49bf853394f4bb3800e";
export const url=new URL("../icons/cloud-thin.svg?v=9a8cccf3a8257af94157acd83f487369ca8811fcff3b116cc9b3b5eb5f93baa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
