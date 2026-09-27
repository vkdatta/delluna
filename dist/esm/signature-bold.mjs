export const name="signature-bold";
export const id="dl_1a6f35e76c174a9bd5e7";
export const url=new URL("../icons/signature-bold.svg?v=02d8d964956dbbcee9dda3b5fb168d665ca77c196bcd7d4fcd0f585bc220a933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
