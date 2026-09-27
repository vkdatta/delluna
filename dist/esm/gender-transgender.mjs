export const name="gender-transgender";
export const id="dl_8359adadb3554bdab567";
export const url=new URL("../icons/gender-transgender.svg?v=bbb22e3efaed1d7dffb9f6952df37a3522dd0d5e5f6178922e43214a2ddb7ce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
