export const name="punch_clock";
export const id="dl_4fdc5676f1c943f7809e";
export const url=new URL("../icons/punch_clock.svg?v=b6808612e59a2f95b3cff9dc0ef536217d162ae571abdab196c7fb14bed7c59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
