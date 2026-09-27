export const name="download_alt";
export const id="dl_b55179f1b4a7c57f6c81";
export const url=new URL("../icons/download_alt.svg?v=d83df2c395f0e6f073452b166ca3ee8b2ee46ff7fba82519360181f44c863dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
