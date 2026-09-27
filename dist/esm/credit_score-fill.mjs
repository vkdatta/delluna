export const name="credit_score-fill";
export const id="dl_a364c066a2e81bd7499c";
export const url=new URL("../icons/credit_score-fill.svg?v=28ce78c9e7d7050fe961265b32dd2b9d05570caadaa6999357ca702bb164436f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
