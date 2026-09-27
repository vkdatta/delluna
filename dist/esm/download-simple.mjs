export const name="download-simple";
export const id="dl_886e088d2de3444db262";
export const url=new URL("../icons/download-simple.svg?v=74afbdbc6cb0bf80bb0a887b111f93888fbbdde491d2b2a2d888c8a3c5ea4e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
