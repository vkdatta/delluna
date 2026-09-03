export const name="sun-moon";
export const id="dl_4aed4afb739943e4b671";
export const url=new URL("../../icons/lucid_4/sun-moon.svg?v=fd96c5ddbda5d1d673097b0454b8ba50f770c496268b0695b31b7f85f9bf49c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
