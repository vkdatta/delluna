export const name="web_stories";
export const id="dl_a2c6871c5b2b1228656e";
export const url=new URL("../icons/web_stories.svg?v=7beb11ca865dab7481116f62fd0a07b9bbfd5d1b0d458230258186a8e4f94fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
