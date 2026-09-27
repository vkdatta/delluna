export const name="lucid_1-arrow-big-up";
export const id="dl_8b4d2ec492f74488bd51";
export const url=new URL("../icons/lucid_1-arrow-big-up.svg?v=081e669b14bb2766d7928eae294804d457c405ab03f47244579cfd3fa5b65781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
