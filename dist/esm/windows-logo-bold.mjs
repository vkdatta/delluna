export const name="windows-logo-bold";
export const id="dl_9533a028ece8eca5e719";
export const url=new URL("../icons/windows-logo-bold.svg?v=dc031481fcf22dad1f9a9b6e4e4eb4a0bde1e94f8e69bcaa5324666155ab9755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
