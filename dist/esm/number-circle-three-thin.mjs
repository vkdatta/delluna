export const name="number-circle-three-thin";
export const id="dl_3f47c4c5afb04a25ada1";
export const url=new URL("../icons/number-circle-three-thin.svg?v=c5905c28dbdca91c491c10004b36092d7a62057a19c4cd7d4bf2565f7b1c5eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
