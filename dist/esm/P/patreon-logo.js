export const name="patreon-logo";
export const id="dl_6b068deeca2444dab024";
export const url=new URL("../../icons/P/patreon-logo.svg?v=fa1fdd04bba22ef10a6902d3fb01ce03dce99672921400828746188171b82d69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
