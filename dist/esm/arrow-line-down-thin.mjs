export const name="arrow-line-down-thin";
export const id="dl_9205f9072b9e497fa356";
export const url=new URL("../icons/arrow-line-down-thin.svg?v=c155e7b8bd6b64c1acca7dcf640099c95dec5b48f471e49320a7f4b044be59d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
