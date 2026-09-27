export const name="camera-slash-light";
export const id="dl_9aa98c5aca734b6ba2ed";
export const url=new URL("../icons/camera-slash-light.svg?v=cacd8557aab87f1ef69d5b07f2221a6251c12b58a0e1d7118b13c509e641007e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
