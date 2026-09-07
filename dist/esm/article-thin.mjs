export const name="article-thin";
export const id="dl_46ab3b8c966b46bfaae0";
export const url=new URL("../icons/article-thin.svg?v=a7781183652adf1f8c4eacc64ee191e71d05e2abf91e5c063524d76fd9fc40a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
