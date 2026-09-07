export const name="lock-key-open";
export const id="dl_e100f827f4b94eb6971c";
export const url=new URL("../icons/lock-key-open.svg?v=1fb48f46ed6cdde33da88bcffc32dd3a4432231218e37eb284a1f8e60e13bf4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
