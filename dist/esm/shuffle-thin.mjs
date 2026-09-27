export const name="shuffle-thin";
export const id="dl_f4787b7f7beb126e2454";
export const url=new URL("../icons/shuffle-thin.svg?v=a3f5d5f6886f1881f5a3f59f4653a760b985a9e449f4b14ec940d857018eb8fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
