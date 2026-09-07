export const name="table-light";
export const id="dl_f405a214342940c2b0c2";
export const url=new URL("../icons/T/table-light.svg?v=129aab7f1da85d4e3f355ed12bdc7b8ff848c7b9bd28c71fe650b40714a83ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
