export const name="smiley-blank-thin";
export const id="dl_9fbfcc3cb7388af24bde";
export const url=new URL("../icons/smiley-blank-thin.svg?v=7f47da0ef5962965e39b96e6735ad434a78c4e11b09d92497c1dd3507c17de83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
