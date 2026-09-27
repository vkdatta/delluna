export const name="ticket-light";
export const id="dl_ca4642d6f49df0494cb9";
export const url=new URL("../icons/ticket-light.svg?v=06212f0d7fc7adb0b9bbe99b33d51f5a1f89ffb6b062cbbc52c9f1b513c69193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
