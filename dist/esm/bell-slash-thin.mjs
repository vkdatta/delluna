export const name="bell-slash-thin";
export const id="dl_f36c08cc246c4ada82a2";
export const url=new URL("../icons/bell-slash-thin.svg?v=cc4695c1d0d6cc1b12fc9e65ffa2c66034f7c0010d64a62781807a551b94e248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
