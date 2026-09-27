export const name="webcam";
export const id="dl_6d12e0a479464e3f9222";
export const url=new URL("../icons/webcam.svg?v=60998a0c4400eda03df670a34d6d5b77bde6f936c3e2974ba2653145dbfa87b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
